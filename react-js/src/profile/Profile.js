import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({handleName, name,biog,profession, children}) => {
    const stylename = {
        color:"red",
        textAlign : 'center',
        textTransform : 'capitalize'
    }
    const styleimg = {
        textAlign : 'center'
      }
    const styleh3p = {
        textAlign : 'center',
        fontSize:'25px',
        color:'#0987'
    }
    const styleul = {
        textAlign : 'center',
        listStyleType : 'none',
        color : '#098'
    }
    return (
        <div>
            {handleName(name)}
            <h1 style={stylename}>{name}</h1>
            <div>
               <h3 style={styleh3p}>My Biographie </h3>
               <ul style={styleul}>
                 {biog.map((el,i)=>(
                     <li key={i}>{el}</li>
                 ))}  
               </ul>
            </div>
            <p style={styleh3p}>{profession}</p>
            <div style = {styleimg}>
                {children}
            </div>
        </div>
    )
}




Profile.defaultProps = {
    name:"dali",
    profession :'I am a freelancer'
}


Profile.propTypes = {
    name:PropTypes.string.isRequired,
    biog:PropTypes.arrayOf(PropTypes.string).isRequired,
    profession : PropTypes.string.isRequired,
    handleName : PropTypes.func.isRequired
}
export default Profile;
