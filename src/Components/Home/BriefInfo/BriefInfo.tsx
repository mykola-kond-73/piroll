import React, { FC } from 'react'
import classes from './BriefInfo.module.css'
import src from '../../../media/images/daniel-korpai-2nxugQEgsOc-unsplash.jpg'
import Image from '../../Fragment/Image/Image'
import TextInfo from '../../Fragment/TextInfo/TextInfo'
import AButton from '../../Fragment/A_Button/A_Button'
import { Props } from './BriefInfoContainer'

const BriegInfo: FC<Props> = props => {
    return (
        <div className={classes.briegInfo}>
            <div className={classes.container}>
                <Image src={src} alt='***' />
                <div>
                    <div className={classes.textInfo}>
                        <TextInfo title={props.title} text={props.text} />
                    </div>
                    <div className={classes.aButton}>
                        <AButton textButton={props.textButton} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BriegInfo