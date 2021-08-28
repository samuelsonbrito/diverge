import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

export function Emissao() {
    return (
        <div className="content">
            <div className="divLinha">
                <p style={{ color: '#fff', fontWeight: 'bold', padding: '5px' }}>TOMADOR DE SERVIÇO</p>

            </div>
            <Form
                name="basic"
            >
                <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Input placeholder="Razão Social" />
                </Form.Item>
                <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '10px' }}
                >
                    <Input placeholder="E-mail" />
                </Form.Item>
                <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Input placeholder="Inscrição Municipal" />
                </Form.Item>

                <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '10px' }}

                >
                    <Input placeholder="Inscrição Estadual" />
                </Form.Item>
                <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Input placeholder="Logradouro" />
                </Form.Item>

                <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '10px' }}
                >
                    <Input placeholder="Número" />
                </Form.Item>

                <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Input placeholder="CEP" />
                </Form.Item>

                <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '10px' }}
                >
                    <Input placeholder="Bairro" />
                </Form.Item>

                <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Input placeholder="Municipio" />
                </Form.Item>
                <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '10px' }}
                >
                    <Input placeholder="Telefone" />
                </Form.Item>
                {/* <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Avançar
                        </Button>
                    </Form.Item> */}
            </Form>
            <div className="divLinha">
                <p style={{ color: '#fff', fontWeight: 'bold', padding: '5px' }}>SERVIÇO</p>
            </div>
            <Form.Item
                style={{ display: 'inline-block', width: 'calc(25% - 8px)' }}
            >
                <Input placeholder="Serviço" />
            </Form.Item>
            <Form.Item
                style={{ display: 'inline-block', width: 'calc(25% - 8px)', marginLeft: '10px' }}
            >
                <Input placeholder="Valor Unitário" />
            </Form.Item>
            <Form.Item
                style={{ display: 'inline-block', width: 'calc(25% - 8px)', marginLeft: '10px' }}
            >
                <Input placeholder="Quantidade" />
            </Form.Item>
            <Form.Item
                style={{ display: 'inline-block', width: 'calc(25% - 8px)', marginLeft: '10px' }}
            >
                <Input placeholder="Dedução" />
            </Form.Item>

        </div>
    )
}