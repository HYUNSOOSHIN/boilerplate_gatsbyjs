import React from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@material-ui/core';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SwipeableViewComponent = (props) => {
    const theme = useTheme();
    const { onClickHandler } = props;
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    let onMouseMove = false;
    return (
        <div>
            <div
                onMouseDown={() => {
                    onMouseMove = false;
                }}
                onMouseMove={() => {
                    onMouseMove = true;
                }}
                onMouseUp={() => {
                    if (onMouseMove) return;
                    onClickHandler(activeStep);
                }}
            >
                <div>
                    {props.swipeData !== undefined && (
                        <AutoPlaySwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents interval={2000}>
                            {props.swipeData.map((step, index) => (
                                <div key={index}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <img style={{ display: 'block', width: '100%', height: (window.innerWidth / 250) * 80 }} src={step.imageUrl} alt="배너 이미지" />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                    )}
                </div>
            </div>
            <PagenationContainer>
                {props.swipeData !== undefined &&
                    props.swipeData.map((i, idx) => (
                        <PagenationItem
                            key={idx}
                            isActiveStep={activeStep === idx}
                            onClick={() => {
                                setActiveStep(idx);
                            }}
                        ></PagenationItem>
                    ))}
            </PagenationContainer>
        </div>
    );
};

export default SwipeableViewComponent;

const PagenationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin-top: -10px;
`;

const PagenationItem = styled.button`
    background-color: ${(props) => (props.isActiveStep ? '#000000' : '#a4aeb8')};
    margin: 0 2.475px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    z-index: 1000;
`;
