package protosample

import (
	"context"
	"github.com/willpxxr/za-wurldo/backend/pkg/api/protosample"
	"log"
)

type DefaultProtoSampleServer struct {
	protosample.UnimplementedProtoSampleServer
	message string
}

func NewServer(
	defaultMessage string,
) *DefaultProtoSampleServer {
	return &DefaultProtoSampleServer{
		message: defaultMessage,
	}
}

func (d *DefaultProtoSampleServer) Get(_ context.Context, _ *protosample.EmptyMessage) (*protosample.SampleMessage, error) {
	log.Println("Handling request to get message")
	return &protosample.SampleMessage{Message: d.message}, nil
}

func (d *DefaultProtoSampleServer) Put(_ context.Context, request *protosample.SampleMessage) (*protosample.SampleMessage, error) {
	log.Printf("Handling request to put message with new value %s", request.Message)
	d.message = request.Message

	return request, nil
}
