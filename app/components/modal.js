import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

export default function Modal({ isOpen, onClose, data }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50 focus:outline-none">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="w-lg bg-[#0a0a0a] backdrop-blur-2xl rounded-lg">
          <img src={data?.image} alt={data?.title} className="w-full h-72 max-md:h-50 object-cover rounded-t-lg"/>
          <div className="p-6 flex flex-col gap-y-2">
            <DialogTitle className="text-2xl font-bold text-white">{data?.title}</DialogTitle>
            <p className="text-sm text-gray-400">{data?.description}</p>
            {
              data?.case_study && data?.url ? (
                <div className="grid grid-cols-2 max-lg:grid-cols-1 items-center justify-center gap-4 mt-2">
                  <a href={data?.url} target="_blank" className="px-6 py-3 bg-transparent border border-white text-white text-center font-semibold rounded-md hover:bg-white hover:text-indigo-700 transition duration-300 ease-in-out">
                      View Project
                    </a>
                    <a href={data?.case_study} target="_blank" className="px-6 py-3 bg-indigo-700 text-white text-center font-semibold rounded-md hover:bg-indigo-500 transition duration-300 ease-in-out">
                      View Case Study
                    </a>
                </div>
              ) : (
                <div className="grid grid-cols-1 items-center justify-center gap-x-4 mt-2">
                  <a href={data?.url ? data?.url : data?.case_study} target="_blank" className="px-6 py-3 bg-indigo-700 text-white text-center font-semibold rounded-md hover:bg-indigo-500 transition duration-300 ease-in-out">
                    View Project
                  </a>
                </div>
              )
            }
          </div>
        </DialogPanel>
      </div>
    </Dialog>

  )
}