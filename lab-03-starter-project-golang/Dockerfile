FROM golang:1.22-alpine AS builder

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o app

FROM gcr.io/distroless/base-debian12:debug
WORKDIR /app
COPY --from=builder /app/templates /app/templates
COPY --from=builder /app/app /app/app
EXPOSE 8080
CMD ["/app/app", "serve"]
COPY --from=builder /app/templates /app/templates