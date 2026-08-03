# TODO - Authentifier une carte : réorganisation du formulaire

## Objectif
Retirer le champ "Prénom" du formulaire d'authentification et réorganiser l'ordre des champs :
Nom → Email → Type de carte → Code de la carte (avec oeil) → Montant → Devise → Justificatifs

## Étapes
- [x] 1. Mettre à jour `form-schema.ts` (activateFormSchema) : retirer firstName, ajouter cardCode, amount, currency
- [x] 2. Mettre à jour `types/form.ts` (ActivateFormData) : retirer firstName, ajouter cardCode, amount, currency
- [x] 3. Réécrire `ActivateForm.tsx` : retirer Prénom, ajouter code avec oeil, montant, devise
- [x] 4. Mettre à jour `submit-activate.ts` : retirer firstName, ajouter cardCode, amount, currency
- [x] 5. Mettre à jour `email.service.ts` (sendActivateEmail) : retirer Prénom, ajouter code, montant, devise
- [x] 6. Vérifier avec `npx tsc --noEmit`
