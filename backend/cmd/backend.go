package main

import (
	"fmt"
	"github.com/spf13/cobra"
	"github.com/willpxxr/za-wurldo/backend/common"
	"github.com/willpxxr/za-wurldo/backend/server"
	"log"
	"net"
	"os"
)

func NewCommand() *cobra.Command {
	var (
		listenPort int
	)

	command := cobra.Command{
		Use:   "backend",
		Short: "Run the backend API server",
		RunE: func(cmd *cobra.Command, args []string) error {
			log.SetOutput(os.Stdout)
			s := server.NewServer()
			grpc := s.CreateGRPC()
			listener, err := net.Listen("tcp", fmt.Sprintf(":%d", listenPort))

			if err != nil {
				log.Fatal(err)
			}

			log.Printf("Starting to serve on %s", listener.Addr())
			err = grpc.Serve(listener)
			if err != nil {
				log.Fatal(err)
			}

			return nil
		},
	}

	command.Flags().IntVar(&listenPort, "port", common.DefaultPortBackend, "The port to listen on")

	return &command
}
