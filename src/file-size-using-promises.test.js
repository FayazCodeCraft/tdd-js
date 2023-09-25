import { sizeOfFileAtPathUsingPromises } from "./file-size-using-promises";


  test(
    'Test: finding size of file/folder path using promises',
    () =>
        new Promise((resolve) => {
            sizeOfFileAtPathUsingPromises('C:/Users/fayazmmural/Desktop/Web-Responsive-Course')
            .then((totalSize)=>{
                expect(totalSize).toBeGreaterThan(0)
            })
            .catch((err)=>{
                expect(err).toBeDefined()
            })
            .finally(()=>{
                resolve()
            })
            }),
    10000,
)