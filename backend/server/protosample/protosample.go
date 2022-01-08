package protosample

import (
	"context"
	"log"
)

type DefaultProtoSampleServer struct {
	UnimplementedProtoSampleServer
	message string
}

func NewServer(
	defaultMessage string,
) *DefaultProtoSampleServer {
	return &DefaultProtoSampleServer{
		message: defaultMessage,
	}
}

func (d *DefaultProtoSampleServer) Get(_ context.Context, _ *EmptyMessage) (*SampleMessage, error) {
	log.Println("Handling request to get message")
	return &SampleMessage{Message: d.message}, nil
}

func (d *DefaultProtoSampleServer) Put(_ context.Context, request *SampleMessage) (*SampleMessage, error) {
	log.Printf("Handling request to put message with new value %s", request.Message)
	d.message = request.Message

	return request, nil
}
