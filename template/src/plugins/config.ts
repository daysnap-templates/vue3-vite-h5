import { excludeMessage } from '@/utils'
import { formatMessage } from '@daysnap/utils'
import { closeToast, showToast } from 'vant'
import type { Plugin, AppConfig } from 'vue'

// global error handler
const errorHandler: AppConfig['errorHandler'] = (err) => {
  // close vant toast
  closeToast()

  const message = formatMessage(err)
  if (message && !excludeMessage(message)) {
    showToast(message)
  }

  // development env 需要抛出异常 方便查看问题
  if (process.env.NODE_ENV === 'development') {
    throw err
  }
}

export default {
  install(app) {
    app.config.errorHandler = errorHandler
  },
} as Plugin
