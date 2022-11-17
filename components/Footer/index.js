import { Col, Row } from 'antd';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div>
        <Row
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            paddingBottom: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          <Col flex={1}>
            <img src="/assets/logo-white.png" alt="PELEJA" />
          </Col>
          <Col style={{ display: 'flex', alignItems: 'center' }}>
            PELEJA &copy; 2020 - Todos os direitos reservados
          </Col>
        </Row>
        <Row>
          <ul>
            <li><Link href="/category/leia"><a>Leia</a></Link></li>
            <li><Link href="/shows"><a>Assista</a></Link></li>
          </ul>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
