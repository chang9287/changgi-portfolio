import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

type NotFoundProps = {
  targetName: string;
  linkTo: string;
  buttonText: string;
}

export default function NotFound({ targetName, linkTo, buttonText }: NotFoundProps) {
  return (
    <main className='min-h-screen bg-main-bg flex items-center justify-center'>
      <div className='max-w-xl flex flex-col items-center justify-center gap-4'>
        <h1 className='text-6xl'>404</h1>
        <h2 className='text-2xl font-bold'>{targetName}를 찾을 수 없습니다.</h2>
        <p className='text-404page-text text-sm text-center mt-1'>
          요청한 {targetName}가 삭제되었거나,<br/>
          잘못된 주소로 접근했을 수 있습니다.
        </p>
        <div className='mt-5'>
          <Link to={linkTo} className='inline-flex items-center gap-2 px-5 py-3 border rounded-3xl bg-main-black text-white font-semibold transition-all duration-300 hover:bg-404page-backbutton-hover-bg'>
            <MoveLeft size={16} />
            <span>Back to {buttonText}</span>
          </Link>
        </div>
      </div>
    </main>
  );
}