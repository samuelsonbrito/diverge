import React, { useState } from "react";
import { Button, Form, Input, Layout, Modal, Select, Steps } from "antd";
import { Header } from "../components/Header";

export function Emissao() {
  const { Option } = Select;
  const { TextArea } = Input;
  const { Step } = Steps;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  return (
      <>
      <Header />
    <div className="content">
         <Steps current={1} style={{marginTop: '10px', marginBottom: '50px'}}>
                    <Step title="Tomador de Serviço" />
                    <Step title="Emissão NFS-e" />
                    <Step title="Visualização" />
                </Steps>
      <div className="divLinha">
        <p style={{ color: "#fff", fontWeight: "bold", padding: "5px" }}>
          TOMADOR DE SERVIÇO
        </p>
      </div>
      <Form name="basic">
        <Form.Item
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <Input placeholder="Razão Social" />
        </Form.Item>
        <Form.Item
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            marginLeft: "10px",
          }}
        >
          <Input placeholder="E-mail" />
        </Form.Item>
        <Form.Item
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <Input placeholder="Inscrição Municipal" />
        </Form.Item>

        <Form.Item
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            marginLeft: "10px",
          }}
        >
          <Input placeholder="Inscrição Estadual" />
        </Form.Item>
        <Form.Item
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <Input placeholder="Logradouro" />
        </Form.Item>

        <Form.Item
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            marginLeft: "10px",
          }}
        >
          <Input placeholder="Número" />
        </Form.Item>

        <Form.Item
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <Input placeholder="CEP" />
        </Form.Item>

        <Form.Item
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            marginLeft: "10px",
          }}
        >
          <Input placeholder="Bairro" />
        </Form.Item>

        <Form.Item
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <Input placeholder="Municipio" />
        </Form.Item>
        <Form.Item
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            marginLeft: "10px",
          }}
        >
          <Input placeholder="Telefone" />
        </Form.Item>
      </Form>
      <div className="divLinha">
        <p style={{ color: "#fff", fontWeight: "bold", padding: "5px" }}>
          SERVIÇO
        </p>
      </div>
      <Form.Item style={{ display: "inline-block", width: "calc(25% - 8px)" }}>
        <Select showSearch placeholder="Serviço">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </Form.Item>
      <Form.Item
        style={{
          display: "inline-block",
          width: "calc(25% - 8px)",
          marginLeft: "10px",
        }}
      >
        <Input placeholder="Valor Unitário" />
      </Form.Item>
      <Form.Item
        style={{
          display: "inline-block",
          width: "calc(25% - 8px)",
          marginLeft: "10px",
        }}
      >
        <Input placeholder="Quantidade" />
      </Form.Item>
      <Form.Item
        style={{
          display: "inline-block",
          width: "calc(25% - 8px)",
          marginLeft: "10px",
        }}
      >
        <Input placeholder="Dedução" />
      </Form.Item>
      <TextArea rows={4} placeholder="Descrição"/>
      <Form.Item style={{ marginTop: '20px'}}>
        <Button type="primary" htmlType="submit" onClick={showModal}>
          Finalizar
        </Button>
      </Form.Item>
      <br />
      <Modal
        title="Finalizar emissão"
        centered
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Sua NFS-e foi gerada com sucesso!</p>
      </Modal>
    </div>
    </>
  );
}
