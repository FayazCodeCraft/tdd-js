import { flattenFileHierarchyASync, flattenFileHierarchySync } from "./flattenFieHierarchy"

test('finding flattened file paths synchronously', () => {
    expect(flattenFileHierarchySync('C:/Users/fayazmmural/Desktop/Web-Responsive-Course/Personal Portfolio/index.html')).toEqual([ 'C:/Users/fayazmmural/Desktop/Web-Responsive-Course/Personal Portfolio/index.html'])
    expect(flattenFileHierarchySync('C:/Users/fayazmmural/Desktop/Web-Responsive-Course')).toEqual(
        [
            'C:/Users/fayazmmural/Desktop/Web-Responsive-Course/Personal Portfolio/index.html',
            'C:/Users/fayazmmural/Desktop/Web-Responsive-Course/Personal Portfolio/styles.css',
            'C:/Users/fayazmmural/Desktop/Web-Responsive-Course/Product Landing Page/index.html',
            'C:/Users/fayazmmural/Desktop/Web-Responsive-Course/Product Landing Page/styles.css',
            'C:/Users/fayazmmural/Desktop/Web-Responsive-Course/Survey Form/.vscode/settings.json',
            'C:/Users/fayazmmural/Desktop/Web-Responsive-Course/Survey Form/index.html',
            'C:/Users/fayazmmural/Desktop/Web-Responsive-Course/Survey Form/styles.css',
            'C:/Users/fayazmmural/Desktop/Web-Responsive-Course/Technical Documentation/index.html',
            'C:/Users/fayazmmural/Desktop/Web-Responsive-Course/Technical Documentation/styles.css'
        ]

    )

})



test(
    'Test1: finding flattened file paths Asynchronously',
    () =>
        new Promise((resolve) => {
            flattenFileHierarchyASync('C:/Users/fayazmmural/Desktop/Web-Responsive-Course/Personal Portfolio/index.html', (error, flattenedPaths) => {
                expect(error).toBeNull()
                expect(flattenedPaths).toEqual(['C:/Users/fayazmmural/Desktop/Web-Responsive-Course/Personal Portfolio/index.html'])
                resolve()
            })
        }),
    10000,
)

test(
    'Test2: finding flattened file paths Asynchronously',
    () =>
        new Promise((resolve) => {
            flattenFileHierarchyASync('C:/Users/fayazmmural/Desktop/Web-Responsive-Course', (error, flattenedPaths) => {
                expect(error).toBeNull()
                expect(flattenedPaths.length).toBe(9)
                resolve()
            })
        }),
    10000,
)