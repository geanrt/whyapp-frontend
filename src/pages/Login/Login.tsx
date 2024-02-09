import { Flex } from 'antd'
import styles from './Login.module.css'
import logo from '@/assets/logowhy@2x.png'
import Auth from '../../components/Auth/Auth'
import { useEffect, useState } from 'react'

const Login = () => {
  const [values, setValues] = useState<object | null>(null)
  const [submitted, setSubmitted] = useState<boolean>(false)

  useEffect(() => {
    if (values) {
      setSubmitted(true)
      console.log(values)
      setValues(null)
    }
  }, [values])

  return (
    <Flex vertical justify="center" gap={60} className={styles.login_container}>
      <div className={styles.login_background}></div>
      <Flex style={{ minHeight: '200px' }} vertical justify="end">
        <div className={styles.login_logo}>
          <img src={logo} alt="logo" />
        </div>
      </Flex>
      <Flex flex={2} vertical align="center" justify="start">
        <Auth
          type="login"
          submitted={submitted}
          setValues={setValues}
          authWithGoogle={() => {}}
          authWithFacebook={() => {}}
          authWithApple={() => {}}
        />
      </Flex>
    </Flex>
  )
}
export default Login