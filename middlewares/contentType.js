import { StatusCodes } from 'http-status-codes'

/**
 * 檢查請求的 Content-type
 * @param {string} type Content-Type
 * @return express middleware function
 */
export default (type) => {
  return (req, res, next) => {
    if (
      !req.headers['content-type'] ||
      !req.headers['content-type'].includes(type)
    ) {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: '格式錯誤'
      })
      return
    }
    next()
  }
}
