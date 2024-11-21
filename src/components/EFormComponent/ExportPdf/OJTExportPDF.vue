<template>
    <div></div>
</template>

<script>
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

export default {
    name: 'OJTExportPDF',

    methods: {
        generatePDF(application) {
            var dd = {
                header: {
                    stack: [
                        {
                            columns: [
                                { text: 'PKT GROUP COMPANIES', style: 'header' },
                                {
                                    stack: [
                                        { text: 'FORM NO: PKT-FR13', style: 'headerRight', alignment: 'right' },
                                        { text: 'REV NO: 02', style: 'headerRight', alignment: 'right' },
                                        { text: 'Effective Date: 13th October 2024', style: 'headerRight', alignment: 'right' }
                                    ]
                                }
                            ]
                        }
                    ],
                    margin: [40, 10, 40, 10]
                },

                content: [
                    {
                        style: 'tableObjectives',
                        table: {
                            widths: ['20%', '40%', '20%', '20%'],
                            body: [
                                [
                                    { text: 'FAMILLIARISATION PROGRAMME/ON JOB TRAINING', colSpan: 4, alignment: 'center', bold: true, fontSize: 14, border: [true, true, true, true], fillColor: '#E6E6E6' },
                                    {}, {}, {}
                                ],
                                [
                                    { text: 'Evaluation Criteria', fontSize: 10, alignment: 'left', bold: true, border: [true, true, true, true] },
                                    { text: 'Poor', fontSize: 10, alignment: 'center', bold: true, border: [true, true, true, true] },
                                    { text: 'Fair', fontSize: 10, alignment: 'center', bold: true, border: [true, true, true, true] },
                                    { text: 'Good', fontSize: 10, alignment: 'center', bold: true, border: [true, true, true, true] },
                                ],
                                [
                                    { text: '1. Objectives of this program adequately met', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
                                    { text: '', fontSize: 10, alignment: 'center', border: [true, true, true, true] },
                                    { text: '', fontSize: 10, alignment: 'center', border: [true, true, true, true] },
                                    { text: '', fontSize: 10, alignment: 'center', border: [true, true, true, true] },
                                ],
                                [
                                    { text: '2. Training will greatly assist you in your profession / area of work.', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
                                    { text: '', fontSize: 10, alignment: 'center', border: [true, true, true, true] },
                                    { text: '', fontSize: 10, alignment: 'center', border: [true, true, true, true] },
                                    { text: '', fontSize: 10, alignment: 'center', border: [true, true, true, true] },
                                ],
                                [
                                    { text: '3. Trainer has good presentation skill/style, knowledge and grip over the subject.', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
                                    { text: '', fontSize: 10, alignment: 'center', border: [true, true, true, true] },
                                    { text: '', fontSize: 10, alignment: 'center', border: [true, true, true, true] },
                                    { text: '', fontSize: 10, alignment: 'center', border: [true, true, true, true] },
                                ],

                            ]
                        },
                        layout: {
                            hLineWidth: function (i, node) {
                                return 0.5;
                            },
                            vLineWidth: function (i, node) {
                                return 0.5;
                            },
                            paddingLeft: function (i, node) {
                                return 4;
                            },
                            paddingRight: function (i, node) {
                                return 4;
                            },
                            paddingTop: function (i, node) {
                                return 4;
                            },
                            paddingBottom: function (i, node) {
                                return 4;
                            }
                        }
                    },

                ],
                styles: {
                    SectionATitle: {
                        fontSize: 12,
                        bold: true,
                        decoration: 'underline',
                        margin: [0, -8, 0, 4],
                    },
                    header: {
                        fontSize: 10,
                        margin: [0, 0, 0, 10]
                    },
                    headerRight: {
                        fontSize: 7,
                    },
                    subheader: {
                        fontSize: 16,
                        bold: true,
                        margin: [0, 10, 0, 5]
                    },
                    TableTitle: {
                        margin: [0, 5, 0, 15]
                    },
                    tableIntroduction: {
                        margin: [0, 5, 0, 15]
                    },
                    tableObjectives: {
                        margin: [0, 5, 0, 15]
                    },
                    TableBenefitGained: {
                        margin: [0, 5, 0, 15]
                    },
                    tableSignature: {
                        margin: [0, 5, 0, 13]
                    },
                    TableGeneralComment: {
                        margin: [0, 5, 0, 15]
                    },
                },
            };
            pdfMake.createPdf(dd).download('testOJT.pdf');
        },

        beforeMount() {
            if (pdfMake && pdfFonts && pdfFonts.pdfMake && pdfFonts.pdfMake.vfs) {
                pdfMake.vfs = pdfFonts.pdfMake.vfs;
            } else {
                console.error("Error: pdfMake or pdfFonts is not properly loaded");
            }
        },
    }
};
</script>