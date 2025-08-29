<template>
  <main
    class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64"
  >
    <div
      class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 rounded-lg px-6 py-8 shadow-xl"
    >
      <h1 class="text-3xl font-bold text-blue-900 dark:text-white">
        PKT GROUP OF COMPANIES
      </h1>
      <h2 class="text-xl font-bold text-blue-800 dark:text-white mt-3">
        Attendance Record
      </h2>

      <!-- Upload Button -->
      <div class="mb-6 mt-6 flex items-center space-x-3">
        <label
          for="file-upload"
          class="flex items-center justify-center text-center rounded-r-full rounded-l-md bg-[#160959] dark:bg-[#111827] text-slate-200 py-2 px-4 text-sm hover:bg-[#190a70] hover:text-white cursor-pointer"
        >
          Choose File
        </label>
        <input
          id="file-upload"
          ref="fileInput"
          type="file"
          accept=".xlsx, .xls"
          class="hidden"
          @change="handleFileUpload"
        />
      </div>

      <!-- Uploads Table -->
      <div
        v-if="uploads.length"
        class="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow"
      >
        <table class="min-w-full text-sm">
          <thead>
            <tr
              class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            >
              <th class="px-4 py-2 text-center w-20">No.</th>
              <th class="px-4 py-2 text-center">File Name</th>
              <th class="px-4 py-2 text-center">Rows</th>
              <th class="px-4 py-2 text-center">Uploaded At</th>
              <th class="px-4 py-2 text-center w-20">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(file, index) in uploads"
              :key="index"
              class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td class="px-4 py-2">{{ index + 1 }}</td>

              <!-- Click File Name to download directly -->
              <td class="px-4 py-2 text-left">
                <a
                  href="#"
                  class="text-blue-600 dark:text-blue-400 hover:underline"
                  @click.prevent="downloadFile(file)"
                >
                  {{ file.name }}
                </a>
              </td>

              <td class="px-4 py-2">{{ file.rows }}</td>
              <td class="px-4 py-2">{{ file.date }}</td>

              <!-- delete -->
              <td class="px-4 py-2 flex space-x-3 justify-center">
                <button
                  @click="removeFile(index)"
                  class="text-red-500 hover:text-red-700 "
                  title="Delete"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p v-else class="text-gray-500 dark:text-gray-400">
        Please upload an Excel file first
      </p>
    </div>
  </main>
</template>

<script>
import * as XLSX from "xlsx"
import Swal from "sweetalert2"

export default {
  name: "UploadPreview",

  data() {
    return {
      uploads: [] // { name, rows, url, date }
    }
  },

  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (!file) return

      // Duplicate file name use SweetAlert2 to alert
      if (this.uploads.some((f) => f.name === file.name)) {
        Swal.fire({
          icon: "warning",
          title: "Duplicate File",
          text: "This file has already been uploaded.",
          confirmButtonText: "OK"
        })
        this.$refs.fileInput.value = ""
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: "array" })
        const sheetName = workbook.SheetNames[0]
        const sheet = workbook.Sheets[sheetName]
        const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 })
        const rows = sheetData.length > 0 ? sheetData.length - 1 : 0

        // 建立 blob URL
        const blob = new Blob([e.target.result], { type: file.type })
        const url = URL.createObjectURL(blob)

        const fileRecord = {
          name: file.name,
          rows,
          url,
          date: new Date().toLocaleString()
        }

        this.uploads.push(fileRecord)
        this.saveToStorage()

        this.$refs.fileInput.value = ""
      }
      reader.readAsArrayBuffer(file)
    },

    downloadFile(file) {
      const link = document.createElement("a")
      link.href = file.url
      link.download = file.name
      link.click()
    },

    removeFile(index) {
      URL.revokeObjectURL(this.uploads[index].url)
      this.uploads.splice(index, 1)
      this.saveToStorage()
    },

    saveToStorage() {
      localStorage.setItem("uploads", JSON.stringify(this.uploads))
    },

    loadFromStorage() {
      const saved = localStorage.getItem("uploads")
      if (saved) {
        this.uploads = JSON.parse(saved)
      }
    }
  },

  mounted() {
    this.loadFromStorage()
    const element = document.querySelector("main")
    const openOrNot = localStorage.getItem("openOrNot")
    if (element && openOrNot === "false") {
      element.classList.add("become-big")
    } else if (element && openOrNot === "true") {
      element.classList.remove("become-big")
    }
  }
}
</script>
