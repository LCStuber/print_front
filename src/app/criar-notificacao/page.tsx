'use client';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import Navbar from '@/app/components/Navbar';
import './style.css';
import { FloatLabel } from 'primereact/floatlabel';

export default function CriarNotificacao() {
    const [formData, setFormData] = useState({
        notification_id: '',
        title: '',
        description: '',
        timestamp: 0,
    });

    const [errors, setErrors] = useState({
        title: '',
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors: any = {};
        if (!formData.title) newErrors.title = 'Título é obrigatório.';
        if (!formData.description) newErrors.description = 'Descrição é obrigatória.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <>
            <Navbar text="Gerenciar Notificações" anchor="/gerenciar-notificacoes" />
            <div className="grid justify-content-center px-4 mt-3 mx-0">
                <form className="lg:col-4 col-12 p-4 shadow-2 border-round" onSubmit={handleSubmit}>
                    <div className="form-group mb-3 mt-4 ml-2">
                        <label htmlFor="title" className="block mb-2">Título</label>
                        <InputText
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Digite o título da notificação"
                        />
                    </div>
                        {errors.title && <small className="ml-2 p-error">{errors.title}</small>}
                    <div className="form-group col-12 mb-3 mt-4">
                        <FloatLabel>
                            <InputTextarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full"
                                rows={5}
                                placeholder="Digite a descrição da notificação"
                            />
                            <label htmlFor="description">Descrição</label>
                        </FloatLabel>
                        {errors.description && <small className="p-error">{errors.description}</small>}
                    </div>
                    <div className="form-group flex justify-content-end">
                        <Button label="Adicionar Notificação" type="submit" />
                    </div>
                </form>
            </div>
        </>
    );
}
