import { useState } from 'react'
import { useForm } from 'react-hook-form'

import authApi from '@/api/authApi'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// MARK: Define interface
export interface IAuthFormProps {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

// MARK: Component
export default function AuthForm(props: IAuthFormProps) {
    const [isDisableContinue, setIsDisableContinue] = useState<boolean>(true)
    // Define validate Schema
    const formSchema = z.object({
        email: z.string().email('Email nhập vào không hợp lệ'),
    })
    // Define form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
        },
    })

    const fetchAccountApi = async (email) => {
        const accountRes = await authApi.login(email)
    }

    // Onsumit Handler
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const { email } = values;
        fetchAccountApi(email)
    }

    function handleChange() {
        const { email } = form.getValues()
        if (email) setIsDisableContinue(false)
        else setIsDisableContinue(true)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
                onChange={handleChange}
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Nhập vào email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="w-full"
                    disabled={isDisableContinue}
                >
                    Tiếp tục
                </Button>
            </form>
        </Form>
    )
}
