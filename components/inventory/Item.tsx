import React from 'react';
import { View } from 'react-native';
import { FormData, FormErrors } from '@/types/cadastroForm';
import LabeledInput from '../form/LabeledInput';
import FormSection from '../form/FormSection';

interface Props {
    form: FormData;
    errors: FormErrors;
    setField: (field: keyof FormData, value: string) => void;
    setCreatedAt: (v: string) => void;
    setNumeroPatrimonioEstado: (v: string) => void;
    setNumeroPatrimonioSenge: (v: string) => void;
    setNumeroDeSerie: (v: string) => void;
    setTipo: (v: string) => void;
    setModelo: (v: string) => void;
    setFabricante: (v: string) => void;
    setFotoUrl: (v: string) => void;
}

export default function Item({
    form,
    errors,
    setField,
    setCreatedAt,
    setNumeroPatrimonioEstado,
    setNumeroPatrimonioSenge,
    setNumeroDeSerie,
    setTipo,
    setModelo,
    setFabricante,
    setFotoUrl
}: Props) {
    return(
        <View>
            <FormSection title="Numero Patrimonio Estado" />

            {/*Numero patrimonio do estado */}
            <LabeledInput
            label='Numero Patrimonio Estado'

            />
        </View>
    )
}