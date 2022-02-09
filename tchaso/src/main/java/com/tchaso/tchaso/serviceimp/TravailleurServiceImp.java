package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.enumeration.Type;
import com.tchaso.tchaso.models.FileUploadUtil;
import com.tchaso.tchaso.models.Travailleur;
import com.tchaso.tchaso.repository.TravailleurRepository;
import com.tchaso.tchaso.services.TravailleurService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.NoResultException;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
@Slf4j
public class TravailleurServiceImp implements TravailleurService {

    TravailleurRepository travailleurRepository;

    public TravailleurServiceImp(TravailleurRepository travailleurRepository){
        this.travailleurRepository = travailleurRepository;
    }

    @Override
    public Travailleur add_travailleur(Travailleur travailleur,
                                       @RequestParam("image") MultipartFile multipartFilePhoto,
                                       @RequestParam("piece") MultipartFile multipartFilePiece) throws IOException {
        String fileNamePhoto = StringUtils.cleanPath(multipartFilePhoto.getOriginalFilename());
        String fileNamePiece = StringUtils.cleanPath(multipartFilePiece.getOriginalFilename());
        travailleur.setPhoto(fileNamePhoto);
        travailleur.setPieceiden(fileNamePiece);
        Travailleur tr = travailleurRepository.save(travailleur);
        String uploadDirPhoto = "src/main/resources/photo/photo" + tr.getId();
        String uploadDirPiece = "src/main/resources/piece/piece" + tr.getId();
        FileUploadUtil.saveFile(uploadDirPhoto, fileNamePhoto, multipartFilePhoto);
        FileUploadUtil.saveFile(uploadDirPiece, fileNamePiece, multipartFilePiece);
        return tr;
    }

    @Override
    public Travailleur update_travailleur(Integer Id, Travailleur travailleur) {
        Travailleur trv = travailleurRepository.findById(Id).get();
        trv.setNom(travailleur.getNom());
        trv.setPrenom(travailleur.getPrenom());
        trv.setGenre(travailleur.getGenre());
        trv.setPieceiden(travailleur.getPieceiden());
        trv.setEtat(travailleur.getEtat());
        trv.setQuartier(travailleur.getQuartier());
        trv.setPhoto(travailleur.getPhoto());
        trv.setLogin(travailleur.getLogin());
        trv.setPassword(travailleur.getPassword());
        trv.setSpecialite(travailleur.getSpecialite());
        trv.setVille(travailleur.getVille());
        trv.setNumWhasapp(travailleur.getNumWhasapp());
        trv.setAdministrateur(travailleur.getAdministrateur());
        return travailleurRepository.save(trv);
    }

    @Override
    public List<Travailleur> list_travailleur() {
        return travailleurRepository.findAll();
    }

    @Override
    public Travailleur afficher_travailleur_by_id(Integer Id) {
        return travailleurRepository.findById(Id).get();
    }

    @Override
    public void delete_travailleur(Integer Id) {
        travailleurRepository.delete_travailleur(Id);
    }

    @Override
    public byte[] getpHOTO(Integer Id) throws IOException {
        Travailleur trv = travailleurRepository.findById(Id).get();
        String iconPhoto = trv.getPhoto();
        File file = new File("src/main/resources/photo/photo"+ trv.getId() +"/" +iconPhoto);
        Path path = Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }

    @Override
    public byte[] getpiece(Integer Id) throws IOException {
        Travailleur trv = travailleurRepository.findById(Id).get();
        String iconPiece = trv.getPieceiden();
        File file = new File("src/main/resources/piece/piece"+ trv.getId() +"/" +iconPiece);
        Path path = Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }

    @Override
    public List<Travailleur> afficher_travailleur_specialite(Integer Id) {
        if (Id == null ){
            log.error("Specialite id est null");
            return null;
        }
        return travailleurRepository.specialiteByService(Id);
    }

    @Override
    public Travailleur verifilogin(String login) {
        try {
            Travailleur travailleur = travailleurRepository.findOneByLogin(login);
            return travailleur;
        } catch (NoResultException e) {
            return null;
        }
    }


    @Override
    public Travailleur authentification(String login, String password) {
        try {
            Travailleur travailleur = travailleurRepository.findOneByLoginAndPassword(login, password);
            return travailleur;
        } catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public Travailleur authtravailleur(String login, String password, Type type) {
        try {
            Travailleur travailleur = travailleurRepository.findOneByLoginAndPasswordAndType(login, password, type);
            return travailleur;
        } catch (NoResultException e) {
            return null;
        }
    }


}

