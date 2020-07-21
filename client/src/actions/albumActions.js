import {POST_ALBUM} from './types'
import axios from 'axios'

export const postAlbum = ({nome,data,banda,musicas}) => dispatch => {
    const body = JSON.stringify({nome,data,banda,musicas})
    console.log(body)
    const config = {
        headers:{
        'Content-Type' : 'Application/json'
    }}
    axios.post('/album/cadastro', body,config)
    .then(res => {
        dispatch({
            type : POST_ALBUM,
            payload : res.data
        })
    }).catch( err => {
        console.log(err)
    })
} 