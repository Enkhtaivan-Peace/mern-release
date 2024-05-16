import React from 'react'
import useFile from './useFile'
import Image from 'next/image'
type TImageViewer = Partial<TShape> & {
    file: File
}
function ImageViewer({ file, width, height }: TImageViewer) {
    const { convertedFile } = useFile(file)
    console.log('hello im convertedFile', convertedFile)
    console.log('hello im file', file)
    return (
        <div>
            <Image
                alt={file?.name}
                src={convertedFile || '/images/demo-image.png'}
                width={width ? `${width}` : 1280}
                height={height ? `${height}` : 1280}
            />
        </div>
    )
}

export default ImageViewer
