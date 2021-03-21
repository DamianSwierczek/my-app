import { FC } from 'React';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../..styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';

const Wrapper2 = styled(Wrapper)`
    width: 1200px;
    background: $(Colors.white);
`;

const RightIcons = styled.div`

`;

const InputWrapper = styled.div`

`;
const CustomImg = styled.img``;

const CustomImput = styled.input`

`;

export const TopBar: FC = () => {

    return (
        <Wrapper2>
            <InnerWrapper>
                <CustomImg src="./media/logo.png" />
                <div>
                    <ExpandedMenu />
                </div>
                <InputWrapper>
                <CustomInput type="text" />
                <input type="text" />
                </InputWrapper>
            </InnerWrapper>
        </Wrapper2>
    )
}

