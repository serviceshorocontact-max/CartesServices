# TODO — Suppression du champ "Code de la carte" dans le formulaire d'authentification

- [ ] `src/lib/validations/form-schema.ts` — retirer `cardCode` du schéma `activateFormSchema`
- [ ] `src/types/form.ts` — retirer `cardCode` de l'interface `ActivateFormData`
- [ ] `src/app/actions/submit-activate.ts` — retirer `cardCode` du parsing
- [ ] `src/services/email.service.ts` — retirer `cardCode` de `sendActivateEmail` (params + ligne HTML)
- [ ] `src/components/forms/ActivateForm.tsx` — retirer le champ UI + import `Hash` + default + append
- [ ] Vérification TypeScript (`tsc --noEmit`)
