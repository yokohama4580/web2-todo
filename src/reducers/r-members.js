import * as taskActions from '../actions/a-index';
import { Map, List, fromJS } from 'immutable';

export default function members(state=List([]), action) {

   switch(action.type){

      //タスク一覧取得
      case taskActions.RECIEVE_TASKS:
         return fromJS(action.data.members);

      default:
         return state;
   }

   function findIndexById(id) {
      return state.findIndex((member) => member.get('_id') == id);
   }
}