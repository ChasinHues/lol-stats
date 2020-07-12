import axios from 'axios'

const API_KEY = 'RGAPI-2ff01c1c-468d-400b-b7d7-a11d896ba214'
const BASE_URL = 'https://oc1.api.riotgames.com'
const PROXY = 'https://cors-anywhere.herokuapp.com/'

export function getSummonerByName(name) {
    const url = PROXY + BASE_URL + '/lol/summoner/v4/summoners/by-name/' + name
    const config = {
        url: url,
        method: 'get',
        headers: {
            'X-Riot-Token': API_KEY
        }
    }
    
    return axios(config)
}

export function getMatchList(accountId) {
    const url = PROXY + BASE_URL + '/lol/match/v4/matchlists/by-account/' + accountId
    const config = {
        url: url,
        method: 'get',
        headers: {
            'X-Riot-Token': API_KEY
        }
    }
    
    return axios(config)
}

export function getMatch(matchId) {
    const url = PROXY + BASE_URL + '/lol/match/v4/matches/' + matchId
    const config = {
        url: url,
        method: 'get',
        headers: {
            'X-Riot-Token': API_KEY
        }
    }
    
    return axios(config)
}

export function getMachTimeline(matchId) {
const url = PROXY + BASE_URL + '/lol/match/v4/timelines/by-match/' + matchId
    const config = {
        url: url,
        method: 'get',
        headers: {
            'X-Riot-Token': API_KEY
        }
    }
    
    return axios(config)
}