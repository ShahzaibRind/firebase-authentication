import { FormControl, Input, FormLabel } from '@chakra-ui/react'
import React from 'react'

const InputC = (props) => {
    return (
        <div>
            <FormControl>
                {props.label && <FormLabel>{props.label}</FormLabel>
                }
                <Input w={'100%'} bg={'gray.100'} p={'10px'} borderRadius={'10px'} {...props} />
            </FormControl>
        </div>
    )
}

export default InputC