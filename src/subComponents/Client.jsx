import React from 'react'
import  NiceAvatar, { genConfig } from 'react-nice-avatar'
const clientStyle = {
  display: "flex",
  flexDirection: "column",
  fontFamily: "'Tilt Neon', sans-serif",
};

function Client({username}) {
  const config = {
    "sex": "woman",
    "faceColor": "#F9C9B6",
    "earSize": "small",
    "eyeStyle": "circle",
    "noseStyle": "long",
    "mouthStyle": "smile",
    "shirtStyle": "polo",
    "glassesStyle": "round",
    "hairColor": "#FC909F",
    "hairStyle": "mohawk",
    "hatStyle": "beanie",
    "hatColor": "#FC909F",
    "eyeBrowStyle": "upWoman",
    "shirtColor": "#6BD9E9",
    "bgColor": "linear-gradient(45deg, #176fff 0%, #68ffef 100%)"
  }
  const myConfig = genConfig(config)
  return (
    <div style={clientStyle}>
     <NiceAvatar style={{ width: '5rem', height: '5rem' }} {...myConfig} />
     <div><span>{username}</span></div>
    </div>
  )
}

export default Client
