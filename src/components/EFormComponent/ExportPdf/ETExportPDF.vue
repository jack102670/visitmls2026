<template>
    <div></div>
</template>
<script>
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

export default {
    name: 'ETExportPDF',
    methods: {
        generateET(application) {


            const ET = {
                header: {
                    stack: [
                        {
                            columns: [
                                {
                                    text: 'PKT GROUP COMPANIES',
                                    alignment: 'left',
                                    style: 'header',
                                    width: '73%'
                                },
                                {
                                    width: '*',
                                    alignment: 'right',
                                    table: {
                                        widths: [60, 60],
                                        body: [
                                            [
                                                { text: 'Revision/pg', alignment: 'left', fontSize: 7 },
                                                { text: '01/01', alignment: 'left', fontSize: 7 }
                                            ],
                                            [
                                                { text: 'Effective Date', alignment: 'left', fontSize: 7 },
                                                { text: '22/01/2024', alignment: 'left', fontSize: 7 }
                                            ]
                                        ]
                                    }
                                }
                            ]
                        }
                    ],
                    margin: [40, 10, 40, 10]
                },

                content: [
                    {
                        text: 'EMPLOYEE TRANSFER REQUEST FORM',
                        alignment: 'center',
                        bold: true,
                        fontSize: 14,
                        margin: [0, 10, 0, 5]
                    },
                    {
                        style: 'tableET',
                        table: {
                            widths: ['5.56%', '14.81%', '14.81%', '12.03%', '5.56%', '12.03%', '14.81%', '14.81%', '5.56%'],
                            body: [
                                [{
                                    text: 'A. SECTION A: TO BE COMPLETED BY EMPLOYEE',
                                    fontSize: 10,
                                    bold: true,
                                    colSpan: 9,

                                }, {}, {}, {}, {}, {}, {}, {}, {}],

                                [{
                                    text: '1.',
                                    bold: true,
                                    fontSize: 8,
                                    alignment: 'center',
                                    border: [true, true, false, false],
                                }, {
                                    text: "Employee's Particular",
                                    bold: true,
                                    fontSize: 8,
                                    alignment: 'left',
                                    colSpan: 8,
                                    border: [false, false, true, false],
                                }, {}, {}, {}, {}, {}, {}, {}],
                                [{
                                    text: '',
                                    border: [true, false, false, false],
                                }, {
                                    text: 'Name of Employee : ',
                                    bold: false,
                                    fontSize: 8,
                                    alignment: 'left',
                                    border: [false, false, false, false],

                                }, {
                                    text: '____________________________________ ',
                                    bold: false,
                                    fontSize: 8,
                                    alignment: 'left',
                                    colSpan: 2,
                                    border: [false, false, false, false],
                                }, {}, {
                                    text: 'Current Designation : ',
                                    bold: false,
                                    fontSize: 8,
                                    alignment: 'left',
                                    border: [false, false, false, false],
                                    colSpan: 2,
                                }, {}, {
                                    text: '________________________________________ ',
                                    bold: false,
                                    fontSize: 8,
                                    alignment: 'left',
                                    colSpan: 2,
                                    border: [false, false, false, false],
                                }, {}, {
                                    text: '',
                                    border: [false, false, true, false]
                                }],
                                [{
                                    text: '',
                                    border: [true, false, false, false]
                                }, {
                                    text: 'Name of Company : ',
                                    bold: false,
                                    fontSize: 8,
                                    alignment: 'left',
                                    border: [false, false, false, false]
                                }, {
                                    text: '____________________________________ ',
                                    bold: false,
                                    fontSize: 8,
                                    alignment: 'left',
                                    colSpan: 2,
                                    border: [false, false, false, false]
                                }, {}, {
                                    text: 'Commencement Date : ',
                                    bold: false,
                                    fontSize: 8,
                                    alignment: 'left',
                                    border: [false, false, false, false],
                                    colSpan: 2,
                                }, {}, {
                                    text: '________________________________________ ',
                                    bold: false,
                                    fontSize: 8,
                                    alignment: 'left',
                                    colSpan: 3,
                                    border: [false, false, true, false],
                                }, {}, {}],
                                [{
                                    text: '',
                                    border: [true, false, false, false]
                                }, {
                                    text: 'Department : ',
                                    bold: false,
                                    fontSize: 8,
                                    alignment: 'left',
                                    border: [false, false, false, false]
                                }, {
                                    text: '____________________________________ ',
                                    bold: false,
                                    fontSize: 8,
                                    alignment: 'left',
                                    colSpan: 2,
                                    border: [false, false, false, false]
                                }, {}, {
                                    text: 'Higest Qualification : ',
                                    bold: false,
                                    fontSize: 8,
                                    alignment: 'left',
                                    border: [false, false, false, false],
                                    colSpan: 2,
                                }, {}, {
                                    text: '________________________________________ ',
                                    bold: false,
                                    fontSize: 8,
                                    alignment: 'left',
                                    colSpan: 3,
                                    border: [false, false, true, false]
                                }, {}, {}],
                                [{
                                    text: '2.',
                                    bold: true,
                                    fontSize: 8,
                                    alignment: 'center',
                                    border: [true, true, false, false]
                                }, {
                                    text: "Requisition for Transfer",
                                    fontSize: 8,
                                    bold: true,
                                    colSpan: 8,
                                    border: [false, true, true, false]

                                }, {}, {}, {}, {}, {}, {}, {}],
                                [{
                                    text: '',
                                    border: [true, false, false, false]
                                }, {
                                    text: 'Position Interested : ',
                                    fontSize: 8,
                                    bold: false,
                                    border: [false, false, false, false]

                                }, {
                                    text: '___________________________________',
                                    bold: false,
                                    fontSize: 8,
                                    alignment: 'left',
                                    colSpan: 2,
                                    border: [false, false, false, false]
                                }, {}, {
                                    text: 'Department :',
                                    bold: false,
                                    fontSize: 8,
                                    border: [false, false, false, false],
                                    colSpan: 2,
                                }, {}, {
                                    text: '________________________________________',
                                    bold: false,
                                    fontSize: 8,
                                    alignment: 'left',
                                    colSpan: 3,
                                    border: [false, false, true, false]
                                }, {}, {}],
                                [{
                                    text: '',
                                    border: [true, false, false, false],

                                }, {
                                    text: 'Do you have any work experience related to the position applied for? If yes, kindly elaborate : ',
                                    colSpan: 8,
                                    fontSize: 8,
                                    border: [false, false, true, false]

                                }, {}, {}, {}, {}, {}, {}, {}],
                                [{
                                    text: '',
                                    border: [true, false, false, false],
                                }, {
                                    text: '____________________________________________________________________________________________________________________________\n____________________________________________________________________________________________________________________________\n____________________________________________________________________________________________________________________________',
                                    colSpan: 8,
                                    fontSize: 8,
                                    border: [false, false, true, false]
                                }, {}, {}, {}, {}, {}, {}, {}],
                                [{
                                    text: '',
                                    border: [true, false, false, false],
                                }, {
                                    text: 'Reason for transfer Request : ',
                                    fontSize: 8,
                                    bold: false,
                                    border: [false, false, false, false],
                                    colSpan: 7,
                                }, {}, {
                                }, {}, {}, {}, {}, {
                                    text: '',
                                    border: [false, false, true, false],
                                }],
                                [{
                                    text: '',
                                    border: [true, false, false, false],
                                }, {
                                    text: '____________________________________________________________________________________________________________________________\n____________________________________________________________________________________________________________________________\n____________________________________________________________________________________________________________________________',
                                    colSpan: 8,
                                    fontSize: 8,
                                    border: [false, false, true, false]
                                }, {}, {}, {}, {}, {}, {}, {}],
                                [{
                                    text: 'SECTION B : TO BE COMPLETED BY THE EMPLOYEE’S CURRENT HOD',
                                    fontSize: 10,
                                    bold: true,
                                    colSpan: 9,
                                }, {}, {}, {}, {}, {}, {}, {}, {}],
                                [{
                                    text: '',
                                    border: [true, false, false, false]
                                }, {
                                    text: 'Name of HOD :',
                                    fontSize: 8,
                                    bold: false,
                                    border: [false, false, false, false],

                                }, {
                                    text: '___________________________________',
                                    fontSize: 8,
                                    bold: false,
                                    colSpan: 2,
                                    border: [false, false, false, false],
                                }, {}, {
                                    text: 'Employee request for transfer :',
                                    fontSize: 8,
                                    bold: false,
                                    border: [false, false, false, false],
                                    colSpan: 2,
                                }, {}, {
                                    text: 'Approve / Rejected',
                                    fontSize: 8,
                                    bold: false,
                                    border: [false, false, false, false],
                                    colSpan: 2
                                }, {}, {
                                    text: '',
                                    border: [false, false, true, false],
                                }],
                                [{
                                    text: ' ',
                                    fontSize: 8,
                                    border: [true, false, false, false]
                                }, {
                                    text: 'If rejected, reason for rejection : ',
                                    fontSize: 8,
                                    colSpan: 8,
                                    border: [false, false, true, false]
                                }, {}, {}, {}, {}, {}, {}, {}],
                                [{
                                    text: ' ',
                                    fontSize: 8,
                                    border: [true, false, false, false]
                                }, {
                                    text: '____________________________________________________________________________________________________________________________\n____________________________________________________________________________________________________________________________\n____________________________________________________________________________________________________________________________',
                                    colSpan: 8,
                                    fontSize: 8,
                                    border: [false, false, true, false]
                                }, {}, {}, {}, {}, {}, {}, {}],
                                [{
                                    text: '',
                                    border: [true, false, false, false]
                                }, {
                                    text: 'If employee’s transfer successful, any replacement required :',
                                    border: [false, false, false, false],
                                    fontSize: 8,
                                    colSpan: 3
                                }, {}, {}, {
                                    text: 'Yes / No',
                                    fontSize: 8,
                                    colSpan: 5,
                                    border: [false, false, true, false],
                                }, {}, {}, {}, {}],
                                [{
                                    text: '',
                                    fontSize: 8,
                                    border: [true, false, false, false,]
                                }, {
                                    text: 'Signature of HOD :',
                                    fontSize: 8,
                                    border: [false, false, false, false,]
                                }, {
                                    text: "___________________________________",
                                    colSpan: 2,
                                    fontSize: 8,
                                    bold: false,
                                    border: [false, false, false, false]
                                }, {}, {
                                    text: 'Date :',
                                    fontSize: 8,
                                    border: [false, false, false, false,]
                                }, {
                                    text: "_______________",
                                    colSpan: 4,
                                    fontSize: 8,
                                    bold: false,
                                    border: [false, false, true, false]
                                },
                                {}, {}, {}],
                                [{
                                    text: 'SECTION C : TO BE CO-ORDINATED BY HRD',
                                    fontSize: 10,
                                    bold: true,
                                    colSpan: 9,
                                }, {}, {}, {}, {}, {}, {}, {}, {}],
                                [{
                                    text: '1.',
                                    alignment: 'center',
                                    fontSize: 8,
                                    bold: true,
                                    border: [true, false, false, false]
                                }, {
                                    text: 'Application Received',
                                    fontSize: 8,
                                    bold: true,
                                    colSpan: 3,
                                    border: [false, false, true, false]
                                }, {}, {}, {
                                    text: '2.',
                                    alignment: 'center',
                                    fontSize: 8,
                                    bold: true,
                                    border: [true, false, false, false]
                                }, {
                                    text: "Interview Arrangement",
                                    fontSize: 8,
                                    bold: true,
                                    colSpan: 4,
                                    border: [false, false, true, false]
                                }, {}, {}, {}],

                                [{
                                    text: '',
                                    border: [true, false, false, false]
                                }, {
                                    text: 'Received By :',
                                    fontSize: 8,
                                    bold: false,
                                    border: [false, false, false, false]

                                }, {
                                    text: "___________________________________",
                                    colSpan: 2,
                                    fontSize: 8,
                                    border: [false, false, false, false]

                                }, {}, {
                                    text: '',
                                    border: [true, false, false, false]
                                }, {
                                    text: 'Interview Date/Time :',
                                    fontSize: 8,
                                    bold: false,
                                    border: [false, false, false, false]
                                }, {
                                    text: "_______________________________________",
                                    colSpan: 2,
                                    fontSize: 8,
                                    border: [false, false, false, false]
                                }, {}, {
                                    text:'',
                                    border:[false, false, true, false]
                                }],
                                [{
                                    text: '',
                                    border: [true, false, false, false]
                                }, {
                                    text: 'Date :',
                                    fontSize: 8,
                                    bold: false,
                                    border: [false, false, false, false]

                                }, {
                                    text: "___________________________________",
                                    colSpan: 2,
                                    fontSize: 8,
                                    border: [false, false, false, false]
                                }, {}, {
                                    text: '',
                                    border: [true, false, false, false]
                                }, {
                                    text: 'Interviewer :',
                                    fontSize: 8,
                                    bold: false,
                                    border: [false, false, false, false]
                                }, {
                                    text: "_______________________________________",
                                    colSpan: 2,
                                    fontSize: 8,
                                    border: [false, false, false, false]
                                }, {}, {
                                    text:'',
                                    border: [false, false, true, false]
                                }],
                                [{
                                    text: '3.',
                                    fontSize: 8,
                                    bold: true,
                                    border: [true, true, false, false],
                                    alignment: 'center',
                                }, {
                                    text: ' Acquisition Department’s Decision ',
                                    fontSize: 8,
                                    bold: true,
                                    colSpan: 8,
                                    border: [false, true, true, false]
                                }, {}, {}, {}, {}, {}, {}, {}],
                                [{
                                    text:'',
                                    border: [true, false, false, false]
                                }, {
                                    text: "Employee's Application for the position :",
                                    fontSize: 8,
                                    colSpan:2,
                                    border:[false, false, false, false]
                                }, {}, {
                                    text:'Approved / Rejected ',
                                    fontSize: 8,
                                    border: [false, false, false, false]
                                    
                                }, {
                                    text:'',
                                    border:[false, false, false, false]
                                }, {
                                    text:"Department/Company :",
                                    fontSize: 8,
                                    border:[false, false, false, false],
                                    
                                }, {
                                    text: "_______________________________________",
                                    colSpan: 2,
                                    fontSize: 8,
                                    border: [false, false, false, false]
                                }, {}, {
                                    text:'',
                                    border:[false, false, true, false]
                                }],
                                [{
                                    text:'',
                                    border: [true, false, false, false]
                                }, {
                                    text: "Comments :",
                                    fontSize: 8,
                                    border:[false, false, false, false]
                                }, {
                                    text: '________________________________________________________________________________________________________________________________________',
                                    colSpan:6,
                                    border:[false, false, false, false]
                                }, {}, {}, {}, {}, {}, {
                                    text:'',
                                    border:[false, false, true, false]
                                }],
                                [{
                                    text:'',
                                    border:[true, false, false, false]
                                }, {
                                    text:'Signature :',
                                    fontSize: 8,
                                    border: [false, false, false, false]
                                }, {
                                    text:'__________________',
                                    fontSize: 8,
                                    border: [false, false, false, false]
                                }, {
                                    text:'Name :',
                                    fontSize: 8,
                                    border: [false, false, false, false]
                                }, {
                                    text:'______________________',
                                    fontSize: 8,
                                    colSpan:2,
                                    border: [false, false, false, false]
                                }, {}, {
                                   text:'Date :',
                                    fontSize: 8,
                                    border: [false, false, false, false] 
                                }, {
                                    text:'__________________',
                                    fontSize: 8,
                                    border: [false, false, false, false]
                                }, {
                                    text:'',
                                    border:[false, false, true, false]
                                }],
                                [{
                                    text:'4) Approval by the Group Chief Executive/MD/Group Chief HR if the application successful ',
                                    bold: true,
                                    border: [true, true, true, false],
                                    colSpan: 9,
                                    fontSize: 8,
                                }, {}, {}, {}, {}, {}, {}, {}, {}],
                                [{
                                    text:'',
                                    border:[true, false, false, true],
                                }, {
                                    text:'APPROVED BY :',
                                    fontSize: 8,
                                    bold: true,
                                    border: [false, false, false, true]
                                }, {
                                    text:'__________________',
                                    fontSize: 8,
                                    border: [false, false, false, true]  
                                }, {
                                    text:'',
                                    
                                   border: [false, false, false, true]  
                                }, {
                                    text:'Date :',
                                    fontSize: 8,
                                    colSpan:2,
                                    border: [false, false, false, true] 
                                }, {}, {
                                    text:'__________________',
                                    fontSize: 8,
                                    border: [false, false, false, true]  
                                }, {
                                    colSpan:2,
                                    text:"",
                                    border:[false, false, true, true]
                                }, {}],

                            ]
                        }
                    }


                ],
                styles: {
                    header: {
                        fontSize: 10,
                        margin: [0, 0, 0, 10]
                    },
                    headerRight: {
                        fontSize: 7,
                    },
                    subheader: {
                        fontSize: 15,
                        bold: true
                    },
                    quote: {
                        italics: true
                    },
                    small: {
                        fontSize: 8
                    }
                }
	

            };
            pdfMake.createPdf(ET).download('testPR.pdf');
        },
    },
    onMounted() {
        if (pdfMake && pdfFonts && pdfFonts.pdfMake && pdfFonts.pdfMake.vfs) {
            pdfMake.vfs = pdfFonts.pdfMake.vfs;
        } 
    },
}
</script>