import {Button, Form, Row, Col}  from 'react-bootstrap'
import useCategorias from '../Hooks/useCategorias'


function Formulario() {
    
    

    return (
        <Form>
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='nombre'>Nombre de la Bebida </Form.Label>
                        <Form.Control id='nombre' type='text' placeholder='Ingresa tu chupi' name='nombre'/>
                    </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group className='mb-3'>
                        <Form.Label htmlFor='categoria'>Categoria de la Bebida </Form.Label>
                        <Form.Select id='categoria' name='categoria'>
                            <option>-- Selecciona Categoria </option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario
