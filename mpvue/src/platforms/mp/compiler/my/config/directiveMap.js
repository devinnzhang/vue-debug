// type：
// 0, 默认值, 拼接 ${name}={{ ${content} }}
// 1, 拼接 ${name}
// 2, 拼接 ${map[key]}={{ '${content}' }}
// 3, 拼接 {{ ${content} }}
// 4, 拼接为空字符串
// 5, 不需要在wxml上表现出来，可直接清除

const noSupport = {
  type: 4,
  check: (k, v, errors) => {
    errors(`不支持此指令: ${k}="${v}"`)
    return false
  }
}

export default {
  'v-if': {
    name: 'a:if',
    type: 0
  },
  'v-else-if': {
    name: 'a:elif',
    type: 0
  },
  'v-else': {
    name: 'a:else',
    type: 1
  },
  'v-text': {
    name: '',
    type: 1
  },
  'v-html': {
    name: '',
    type: 1
  },
  'v-on': {
    name: '',
    map: {
      click: 'tap',
      touchstart: 'touchStart',
      touchmove: 'touchMove',
      touchcancel: 'touchCancel',
      touchend: 'touchEnd',
      tap: 'tap',
      longtap: 'longTap',
      input: 'input',
      change: 'change',
      submit: 'submit',
      blur: 'blur',
      focus: 'focus',
      reset: 'reset',
      confirm: 'confirm',
      columnchange: 'columnChange',
      linechange: 'lineChange',
      error: 'error',
      scrolltoupper: 'scrollToUpper',
      scrolltolower: 'scrollToLower',
      scroll: 'scroll',
      load: 'load'
    },
    type: 2
  },
  'v-bind': {
    name: '',
    map: {
      'href': 'url'
    },
    type: 3
  },
  'href': {
    name: 'url',
    type: 2
  },
  'v-pre': noSupport,
  'v-cloak': noSupport,
  'v-once': {
    name: '',
    type: 5
  }
}
