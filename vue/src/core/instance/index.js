import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

debugger;
//vue 初始化
initMixin(Vue)
//$data $state     $set $delete $watch 
stateMixin(Vue)
//$on $off $once $emit
eventsMixin(Vue)
//_update $forceUpdate $destroy
lifecycleMixin(Vue)
//_render return Node, $nextTick
renderMixin(Vue)

export default Vue
