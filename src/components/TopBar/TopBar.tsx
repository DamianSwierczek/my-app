import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';

const Wrapper2 = styled(Wrapper)`
    width: 100%;
    padding:0;
    background: white;
    border: solid;
`;

const RightIcons = styled.div`
float:right;
`;
const InnerWrapper = styled.div`
width: 100%;
`;

const InputWrapper = styled.div`
text-align:center;
`;
const CustomImg = styled.img`
margin-left: 10px;
`;

const CustomInput = styled.input`
width:300px;
`;

export const TopBar: FC = () => {

    return (
        <Wrapper2>
            <InnerWrapper>
                <CustomImg src="./media/icons/network.png" />
                <div>
                    <ExpandedMenu />
                </div>
                <InputWrapper>
                <CustomInput type="text" />
                <CustomImg src ="./media/icons/search.png" alt="" title=""/>
                </InputWrapper>
                <RightIcons>
                <CustomImg src ="./media/icons/house.png" />
                <CustomImg src ="./media/icons/comments.png" />
                <CustomImg src ="./media/icons/bell.png" />
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    );

};

