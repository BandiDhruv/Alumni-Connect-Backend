import http from "http"
import { Express } from "express"
export function startServer(app:Express):void{
  const port=process.env.PORT || 5000
  const server = http.createServer(app)
  server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
  })
}