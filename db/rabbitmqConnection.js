const amqplib = require("amqplib/callback_api");

const connectionUrl =
  "amqps://eecwodul:R0aPZiSkWb23e9Nq2V3jJLzN-DuBFJnQ@puffin.rmq2.cloudamqp.com/eecwodul"; // Replace with your RabbitMQ connection URL

function connectToQueue(callback) {
  amqplib.connect(connectionUrl, (err, conn) => {
    if (err) throw err;
    console.log("connected to rabbitMQ");
    callback(conn);
  });
}

module.exports = { connectToQueue };
