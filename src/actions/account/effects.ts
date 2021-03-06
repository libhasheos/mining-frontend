import { AppAction } from '../../typings/feature';
import { Dispatch } from "redux";
import { AppState } from "../../store/configureStore";
import * as ActionTyps from './constants';
import {
  AccountInfo, 
  PageMinerInfo, 
  MinerTradeInfo, 
  PageMinerTradeInfo,
} from '../../typings/api/api'

export function getQueryVariable() {
  let res : {
    [key: string]: string
  }= {};
  let refer = localStorage.getItem('refer')
  if (refer) {
    res['refer'] = refer;
    return res;
  }
  
  let query = window.location.search.substring(1);
  let vars = query.length > 0 ? query.split('&') : [];

  
  for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      res[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
  }
  if (res['refer']) {
    localStorage.setItem('refer', res['refer'])
  }
  return res;

}
// 4 hook up types to redux actions
type QueryObject = {
  query? : {
    refer?: string,
  account?: string
  }
}
export type TypeAccountInfo = AccountInfo & QueryObject
export const setUserInfo = (accountInfo: TypeAccountInfo): AppAction => ({
  type: ActionTyps.GET_USER_INFO_SUCCESS,
  data: accountInfo
});



export const getUserInfo = () => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    let urlQuery = getQueryVariable();
    // todo: 加入refer
    dispatch(
      setUserInfo({
        query: urlQuery
      })
    );
  };
};

export const setActiveMinerList = (minerContent: PageMinerInfo): AppAction => ({
  type: ActionTyps.GET_ACTIVE_MINER_LIST,
  data: minerContent
})

export const emptyActiveMinerList = (): AppAction => ({
  type: ActionTyps.EMPTY_ACTIVE_MINER_LIST
})


export const setSoldMinerList = (minerContent: PageMinerInfo): AppAction => ({
  type: ActionTyps.GET_SOLD_MINER_LIST,
  data: minerContent
})

export const emptySoldMinerList = (): AppAction => ({
  type: ActionTyps.EMPTY_SOLD_MINER_LIST
})

export const setSoldMiner = (minerId: string): AppAction => ({
  type: ActionTyps.SET_SOLD_MINER_ID,
  data: minerId
})

export const setRecentTradeList = (MinerTradeInfo: MinerTradeInfo[]): AppAction => ({
  type: ActionTyps.GET_RECENT_TRADE_LIST,
  data: MinerTradeInfo
})

export const emptyRecentTradeList = (): AppAction => ({
  type: ActionTyps.EMPTY_RECENT_TRADE_LIST
})

export const setMinerTrade = (MinerTradeInfo: PageMinerTradeInfo): AppAction => ({
  type: ActionTyps.GET_MINER_TRADE_LIST,
  data: MinerTradeInfo
})
export const emptyMinerTrade = (): AppAction => ({
  type: ActionTyps.EMPTY_MINER_TRADE_LIST
})




//pageMinerTrade