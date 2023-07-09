FROM golang:1.20 as base

WORKDIR /usr/src/app

COPY . .

EXPOSE 8000

RUN go build main.go

CMD ["./main"]