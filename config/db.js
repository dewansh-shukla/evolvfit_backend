import mongoose from "mongoose"

const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017")
    .then((res) =>
      console.log(`connected at ${res.connection.host} ${res.connection.port} `)
    )
    .catch((err) => console.log(err))
}

export default connect
