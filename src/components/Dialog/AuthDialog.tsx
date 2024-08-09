import React, { useState } from 'react'

import AuthForm from '@/components/Form/AuthForm'
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'

function AuthDialog() {
    const [step, setStep] = useState<number>(1)

    return (
        <React.Fragment>
            <DialogContent className="py-16 px-10">
                <DialogHeader>
                    <DialogTitle className="text-center text-[20px] leading-[28px] font-semibold">
                        Đăng ký / Đăng nhập
                    </DialogTitle>
                    <DialogDescription className="my-3 text-base text-center">
                        Vui lòng đăng nhập để hưởng những đặc quyền dành cho
                        thành viên.
                    </DialogDescription>
                </DialogHeader>
                <AuthForm setStep={setStep} />
            </DialogContent>
        </React.Fragment>
    )
}

export default AuthDialog
