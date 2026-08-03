# TODO — Suppression du champ téléphone dans les formulaires

- [x] `src/lib/validations/form-schema.ts` — retirer `phone` des schémas activate/sell
- [x] `src/types/form.ts` — retirer `phone` des interfaces ActivateFormData/SellFormData
- [x] `src/app/actions/submit-activate.ts` — retirer `phone` du parsing
- [x] `src/app/actions/submit-sell.ts` — retirer `phone` du parsing
- [x] `src/services/email.service.ts` — retirer `phone` et la ligne "Téléphone"
- [x] `src/components/forms/ActivateForm.tsx` — retirer le champ UI + import + default + append
- [x] `src/components/forms/SellForm.tsx` — retirer le champ UI + import + default + append
- [ ] Vérification TypeScript (`tsc --noEmit`)
- [ ] Commit des modifications
