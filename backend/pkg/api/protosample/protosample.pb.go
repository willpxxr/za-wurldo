// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.19.2
// source: protosample/protosample.proto

package protosample

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type EmptyMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *EmptyMessage) Reset() {
	*x = EmptyMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protosample_protosample_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EmptyMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EmptyMessage) ProtoMessage() {}

func (x *EmptyMessage) ProtoReflect() protoreflect.Message {
	mi := &file_protosample_protosample_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EmptyMessage.ProtoReflect.Descriptor instead.
func (*EmptyMessage) Descriptor() ([]byte, []int) {
	return file_protosample_protosample_proto_rawDescGZIP(), []int{0}
}

type SampleMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Message string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *SampleMessage) Reset() {
	*x = SampleMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protosample_protosample_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SampleMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SampleMessage) ProtoMessage() {}

func (x *SampleMessage) ProtoReflect() protoreflect.Message {
	mi := &file_protosample_protosample_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SampleMessage.ProtoReflect.Descriptor instead.
func (*SampleMessage) Descriptor() ([]byte, []int) {
	return file_protosample_protosample_proto_rawDescGZIP(), []int{1}
}

func (x *SampleMessage) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

var File_protosample_protosample_proto protoreflect.FileDescriptor

var file_protosample_protosample_proto_rawDesc = []byte{
	0x0a, 0x1d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x73, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x0b, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x22, 0x0e, 0x0a, 0x0c,
	0x45, 0x6d, 0x70, 0x74, 0x79, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x29, 0x0a, 0x0d,
	0x53, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x18, 0x0a,
	0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x32, 0x8e, 0x01, 0x0a, 0x0b, 0x50, 0x72, 0x6f, 0x74,
	0x6f, 0x53, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x12, 0x3e, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x19,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x2e, 0x45, 0x6d, 0x70,
	0x74, 0x79, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x1a, 0x1a, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x2e, 0x53, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x4d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x00, 0x12, 0x3f, 0x0a, 0x03, 0x50, 0x75, 0x74, 0x12, 0x1a,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x2e, 0x53, 0x61, 0x6d,
	0x70, 0x6c, 0x65, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x1a, 0x1a, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x73, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x2e, 0x53, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x4d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x00, 0x42, 0x3b, 0x5a, 0x39, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x77, 0x69, 0x6c, 0x6c, 0x70, 0x78, 0x78, 0x72, 0x2f,
	0x7a, 0x61, 0x2d, 0x77, 0x75, 0x72, 0x6c, 0x64, 0x6f, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e,
	0x64, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73,
	0x61, 0x6d, 0x70, 0x6c, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_protosample_protosample_proto_rawDescOnce sync.Once
	file_protosample_protosample_proto_rawDescData = file_protosample_protosample_proto_rawDesc
)

func file_protosample_protosample_proto_rawDescGZIP() []byte {
	file_protosample_protosample_proto_rawDescOnce.Do(func() {
		file_protosample_protosample_proto_rawDescData = protoimpl.X.CompressGZIP(file_protosample_protosample_proto_rawDescData)
	})
	return file_protosample_protosample_proto_rawDescData
}

var file_protosample_protosample_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_protosample_protosample_proto_goTypes = []interface{}{
	(*EmptyMessage)(nil),  // 0: protosample.EmptyMessage
	(*SampleMessage)(nil), // 1: protosample.SampleMessage
}
var file_protosample_protosample_proto_depIdxs = []int32{
	0, // 0: protosample.ProtoSample.Get:input_type -> protosample.EmptyMessage
	1, // 1: protosample.ProtoSample.Put:input_type -> protosample.SampleMessage
	1, // 2: protosample.ProtoSample.Get:output_type -> protosample.SampleMessage
	1, // 3: protosample.ProtoSample.Put:output_type -> protosample.SampleMessage
	2, // [2:4] is the sub-list for method output_type
	0, // [0:2] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_protosample_protosample_proto_init() }
func file_protosample_protosample_proto_init() {
	if File_protosample_protosample_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_protosample_protosample_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EmptyMessage); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protosample_protosample_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SampleMessage); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_protosample_protosample_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_protosample_protosample_proto_goTypes,
		DependencyIndexes: file_protosample_protosample_proto_depIdxs,
		MessageInfos:      file_protosample_protosample_proto_msgTypes,
	}.Build()
	File_protosample_protosample_proto = out.File
	file_protosample_protosample_proto_rawDesc = nil
	file_protosample_protosample_proto_goTypes = nil
	file_protosample_protosample_proto_depIdxs = nil
}
