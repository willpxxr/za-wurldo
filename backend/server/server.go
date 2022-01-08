package server

import (
	protosamplegenerated "github.com/willpxxr/za-wurldo/backend/pkg/api/protosample"
	"github.com/willpxxr/za-wurldo/backend/server/protosample"
	"google.golang.org/grpc"
	"google.golang.org/grpc/health"
	"google.golang.org/grpc/health/grpc_health_v1"
	"google.golang.org/grpc/reflection"
)

type Server struct{}

func NewServer() *Server {
	return &Server{}
}

func (s *Server) CreateGRPC() *grpc.Server {
	server := grpc.NewServer()

	protosamplegenerated.RegisterProtoSampleServer(server, protosample.NewServer("HELLO"))
	grpc_health_v1.RegisterHealthServer(server, health.NewServer())
	reflection.Register(server)

	return server
}
