process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
process.env.PORT = process.env.PORT || 3000

if (process.env.NODE_ENV === 'dev') {
    process.env.urlDB = 'mongodb://127.0.0.1:27017/maratones'
} else {
    process.env.urlDB = 'mongodb://produccion:27017/maratones'
}