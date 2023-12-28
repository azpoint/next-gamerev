import {ArrowPathIcon} from '@heroicons/react/24/outline'

export default function Loading() {
  return (
	<div className='flex justify-center py-6'>
		<ArrowPathIcon className='animate-spin h-6 text-slate-800 w-6'/>
	</div>
  )
}