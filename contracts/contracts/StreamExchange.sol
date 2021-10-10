// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
// pragma abicoder v2;

import "hardhat/console.sol";

import {
  ISuperfluid,
  ISuperToken,
  ISuperApp,
  ISuperAgreement,
  SuperAppDefinitions
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

import {
  IConstantFlowAgreementV1
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol";

import {
  IInstantDistributionAgreementV1
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IInstantDistributionAgreementV1.sol";

import {
  SuperAppBase
} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperAppBase.sol";

import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';
import '@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol';

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// import "./tellor/UsingTellor.sol";

import "./StreamExchangeStorage.sol";
import "./StreamExchangeHelper.sol";
// import "./tellor/ITellor.sol";



contract StreamExchange is Ownable, SuperAppBase {

    // TODO: uint256 public constant RATE_PERCISION = 1000000;
    using SafeERC20 for ERC20;
    using StreamExchangeHelper for StreamExchangeStorage.StreamExchange;
    using StreamExchangeStorage for StreamExchangeStorage.StreamExchange;
    StreamExchangeStorage.StreamExchange internal _exchange;

    event UpdatedStream(address from, int96 newRate, int96 totalInflow);

    constructor(
        ISuperfluid host,
        IConstantFlowAgreementV1 cfa,
        IInstantDistributionAgreementV1  ida,
        ISuperToken inputToken,
        ISuperToken outputToken,
        ISuperToken subsidyToken,
        IUniswapV2Router02 sushiRouter,
        // address payable oracle,
        // uint256 requestId,
        string memory registrationKey)
        UsingTellor(oracle) {
        require(address(host) != address(0), "host");
        require(address(cfa) != address(0), "cfa");
        require(address(ida) != address(0), "ida");
        require(address(inputToken) != address(0), "inputToken");
        require(address(outputToken) != address(0), "output");
        require(!host.isApp(ISuperApp(msg.sender)), "owner SA");

        _exchange.sushiRouter = sushiRouter;
        _exchange.host = host;
        _exchange.cfa = cfa;
        _exchange.ida = ida;
        _exchange.inputToken = inputToken;
        _exchange.outputToken = outputToken;
        _exchange.subsidyToken = subsidyToken;
        // _exchange.oracle = ITellor(oracle);
        // _exchange.requestId = requestId;
        _exchange.feeRate = 20000;
        _exchange.rateTolerance = 10000;
        _exchange.subsidyIndexId = 1;
        _exchange.subsidyRate = 4e17; // 0.4 tokens/second ~ 1,000,000 tokens in a month
        _exchange.owner = msg.sender;

         // Unlimited approve for sushiswap
        ERC20(_exchange.inputToken.getUnderlyingToken()).safeIncreaseAllowance(address(_exchange.sushiRouter), 2**256 - 1);
        ERC20(_exchange.outputToken.getUnderlyingToken()).safeIncreaseAllowance(address(_exchange.sushiRouter), 2**256 - 1);
        // and Supertoken upgrades
        ERC20(_exchange.inputToken.getUnderlyingToken()).safeIncreaseAllowance(address(_exchange.inputToken), 2**256 - 1);
        ERC20(_exchange.outputToken.getUnderlyingToken()).safeIncreaseAllowance(address(_exchange.outputToken), 2**256 - 1);

        uint256 configWord =
            SuperAppDefinitions.APP_LEVEL_FINAL |
            SuperAppDefinitions.BEFORE_AGREEMENT_CREATED_NOOP |
            SuperAppDefinitions.BEFORE_AGREEMENT_UPDATED_NOOP |
            SuperAppDefinitions.BEFORE_AGREEMENT_TERMINATED_NOOP;

        if(bytes(registrationKey).length > 0) {
            _exchange.host.registerAppWithKey(configWord, registrationKey);
        } else {
            _exchange.host.registerApp(configWord);
        }

        // Set up the IDA for sending tokens back
        _exchange._createIndex(_exchange.outputIndexId, _exchange.outputToken);

        // Give the owner 1 share just to start up the contract
        _exchange._updateSubscription(_exchange.outputIndexId, msg.sender, 1, _exchange.outputToken);

        // Setup Liquidity Mining
        _exchange._initalizeLiquidityMining();

        _exchange.lastDistributionAt = block.timestamp;
    }

    

  }