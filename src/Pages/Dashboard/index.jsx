import React from 'react'
import styled from "styled-components";
import Spiral from './assets/spiral.svg'
import BoxImage from './assets/box.svg'
import './index.css'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


export const css = {
  control: provided => ({
    ...provided,
    height: "30px",
    backgroundColor: "white",
    width: "12rem",
    outline: "1px solid red",
    position: "relative",
    margin:'0.5rem',
    textAlign:'left'

  }),
  menu: () => ({
    position: "absolute",
    display: "block",
    backgroundColor: "whitesmoke",
    width: '100%',
  }),
};

function index() {

  return (
    <BodyWrapper>
    <Hero>
      <div className='m-auto'>
        <h2>Your Balance is USD</h2>
        <p>$100, 0000</p>
        <div>
        <div>
          <span>0</span>
          <div>Dai </div>
          </div>
          <small>-------</small>
        </div>
        <div>
        <div>
          <span>0</span>
          <div>Dai </div>
          </div>
          <small>-------</small>
        </div>
        <div>
        <div>
          <span>0</span>
          <div>Dai </div>
          </div>
          <small>-------</small>
        </div>

        <Button>Deposit</Button>
        <Button className=''>Send</Button>
        <Button className=''>Receive</Button>
      </div>
      
      <div className='p-0'>
        <div className=''></div>
        <Image>      
        <img src ={Spiral} className='' />
        </Image>
        </div> 
        </Hero>
        <section className=''>
          <Table>
        <h2 className='my-4'>Assets/History</h2> 
        <table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</Table>
          </section> 

          <section>
            <div className='d-flex justify-content-center align-items-center'>
              <Box>
                <img  className ='m-3' src ={BoxImage} />
                <h6 className='my-2'>Monthly Net flow in $USD</h6>
                <h2>$10,000</h2>
                <h6>Streaming in {' & '} out</h6>
                <FlowsList>
                    <FlowsLiGreen>
                  +0.00 monthly            
                    </FlowsLiGreen>
                    <FlowsLiRed>
                  +0.00 monthly            
                    </FlowsLiRed>
                </FlowsList>
              </Box>
              
              <Box>
                <img  className ='m-3' src ={BoxImage} />
                <h6 className='my-2'>Current Stream</h6>
                <h2>$10,000</h2>
                <h6>Streaming in {' & '} out</h6>

                <Select options={options} styles={css}
                placeholder='Active' />
                
              </Box>
              
            </div>
            </section>  
     
    </BodyWrapper>
  )
}

export default index

const FlowsList = styled.ul`
padding:0;
 li {
   list-style:none;
 }
`

const FlowsLiGreen = styled.li`
font-size:0.8rem;
font-weight:600;
position:relative;
 &:after {
   position:absolute;
content:"";
width: 0; 
	height: 0; 
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid green;
	line-height: 0;
   right: -20px;
   top:8px;
 }

`
const FlowsLiRed = styled.li`
font-size:0.8rem;
font-weight:600;
position:relative;
 &:after {
   position:absolute;
content:"";
width: 0; 
	height: 0; 
  border-left: 5px solid transparent; 
	border-right: 5px solid transparent; 
	border-bottom: 5px solid red;
	line-height: 0;
   right: -20px;
   top:8px;
 }

`
const Box = styled.div`
min-width:15rem;
min-height:20rem;
text-align:center;
border:1px solid gray;
margin:auto 0.9rem;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`


const Image =styled.div`
overflow-x: hidden;
`

const Table = styled.div`
max-width: 50rem;
margin:auto;
`
const Button =styled.button`
background-color:#F53838;
color:white;
padding:0.6rem 1.2rem;
border:0;
border-radius:5px;
margin-right:0.5rem;
margin-top:1rem;
`
const Hero = styled.div`
  border:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
`;


const BodyWrapper =styled.div`
max-width:80rem;
`

const Card = styled.div`
text-align:center;
display:flex;
margin:auto;
border:1px solid red;

`