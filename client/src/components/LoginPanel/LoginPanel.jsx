import React from 'react';
import { Tabs, Button, Checkbox, Form, Input, Badge, message } from 'antd';
import styles from './LoginPanel.module.css';
import Description from '../Description/Description';
import { LoremIpsum } from 'react-lorem-ipsum';
import Avatar from '../Avatar/Avatar';
import Footer from '../Footer/Footer';

const onChange = (key) => {
    console.log(key);
};

const lorem = <LoremIpsum p={2} />;

const items = [
    {
        key: '1',
        label: `join channel`.toUpperCase(),
        children: <Form
            name='join'
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 8,
            }}

            autoComplete="off"
        >
            <Form.Item
                label="Nickname: "
                name="nickname"
                rules={[
                    {
                        required: true,
                        message: 'Please input your nickname!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Channel: "
                name="channel"
                rules={[
                    {
                        required: true,
                        message: 'Please enter the channel name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Choose you avatar: "
                name="avatar"
                rules={[{
                    required: true,
                    message: "Please select your avatar",
                    
                }]}
            >
                <div className={styles.avatars}>
                    <Avatar character={0} />
                    <Avatar character={3} />
                    <Avatar character={1} />
                    <Avatar character={2} />
                </div>
            </Form.Item>

            <div className={styles.submitButtonContainer}>
                <Button type="primary" htmlType="submit" block={false} className={styles.join}>
                    JOIN TO THE CHANNEL
                </Button>
            </div>
        </Form>,
    },
    {
        key: '2',
        label: `Create Channel`,
        children: `Content of Tab Pane 2`,
    },
];


const LoginPanel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loginDescription}>
                <img className={styles.img} src='./join.jpg' />

                <div className={styles.description}>
                    <Description title="Tips" bodyContent={lorem} />
                </div>
            </div>
            <div className={styles.tabs}>
                <Tabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                    centered
                />
            </div>
            <Footer />
        </div>
    );
}
export default LoginPanel;