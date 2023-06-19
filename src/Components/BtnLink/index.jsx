import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnLink = styled(Link)`
        border:1px solid ${props => props.border};
        width:${ props => props.width};
        background:${props => props.bg}
`; 
