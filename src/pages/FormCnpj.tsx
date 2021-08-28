import React from "react";
import { Steps } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import '../styles/container.scss'
import { Link } from "react-router-dom";


export function FormCnpj() {

    const { Step } = Steps;

        return (
            <>
            <div className="container">
            <Steps current={0} style={{marginTop: '10px', marginBottom: '100px'}}>
                    <Step title="Tomador de Serviço" />
                    <Step title="Emissão NFS-e" />
                    <Step title="Visualização" />
                </Steps>
                <Form
                    name="basic"               
                >
                    <Form.Item 
                    >
                        <Input placeholder="Apelido" />
                    </Form.Item>

                    <Form.Item                      
                    >
                        <Input placeholder="CNPJ" />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Emissão Especial</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Link to="/emissao-nfse">
                        <Button type="primary" htmlType="submit">
                            Avançar
                        </Button></Link>
                    </Form.Item>
                </Form>

            </div>
            </>
        )
    }