import {POST_ALBUM} from '../actions/types'

const initialState = {
    albums : [],
    savedAlbums : []
}

export default function (state = initialState , action){
    switch(action.type){
        case POST_ALBUM : return {
            ...state,
            albums : [...state.albums, action.payload]
        }
        default : return state
    }
}